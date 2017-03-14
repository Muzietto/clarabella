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

            var_dump($subtree);

            return $subtree;
        }, $node[$label]);

        return $result;
    }

    private function label(array $node)
    {
        return array_keys($node)[0];
    }
}
