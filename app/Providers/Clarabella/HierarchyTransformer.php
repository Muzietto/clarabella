<?php

namespace App\Providers\Clarabella;

use Illuminate\Support\ServiceProvider;
use function Onebip\array_some;

class HierarchyTransformer
{
    public function serialize(array $dictionary)
    {
        $serialized = [];
        foreach ($dictionary as $key => $value) {
            $serialized[] = [$key, $value];
        }

        return $serialized;
    }

    public function found($newLabel, array $node)
    {
        if (empty($node)) {
            return false;
        }

        if ($this->label($node) === $newLabel) {
            return true;
        }

        return array_some($node, function ($sub) use ($newLabel) {
            return $this->found($newLabel, $sub);
        });
    }

    public function append($newLabel, $parentLabel, array $node)
    {
        $result = $node;
        $label = $this->label($node);

        if ($label === $parentLabel) {
            $node[$label] += [$newLabel => []];

            return $node;
        }

        $result[$label] = array_map(function($subtree) use ($newLabel, $parentLabel) {
            if ($this->found($parentLabel, $subtree)) {
                return $this->append($newLabel, $parentLabel, $subtree);
            }

            return $subtree;
        }, $node[$label]);

        return $result;
    }

    public function denormalize($tree)
    {
        if (empty($tree)) {
            return [];
        }

        $input = $this->serialize($tree);

        $firstBossName = $input[0][1];
        $firstEmployeeName = $input[0][0];

        $firstBossObj[$firstBossName] = [$firstEmployeeName => []];

        if (count($input) === 1) {
            return $firstBossObj;
        }

        return $this->denorm(array_slice($input, 1), $firstBossObj);
    }

    private function denorm($relationships, $resultTree)
    {
        if (empty($relationships)) {
            return $resultTree;
        }

        $bossName = $relationships[0][1];
        $employeeName = $relationships[0][0];
        $topDogName = $this->label($resultTree);

        if ($topDogName === $employeeName) {
            $nextRelationship[$bossName] = $resultTree;
            return $this->denorm(array_slice($relationships, 1), $nextRelationship);
        }

        $nextResultTree = $this->append($employeeName, $bossName, $resultTree);

        return $this->denorm(array_slice($relationships, 1), $nextResultTree);
    }

    private function label(array $node)
    {
        return array_keys($node)[0];
    }
}
