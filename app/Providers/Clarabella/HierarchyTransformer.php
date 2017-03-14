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
        if ($this->label($node) === $newLabel) {
            return true;
        }

        return array_some($node, function ($sub) use ($newLabel) {
            return $this->found($newLabel, $sub);
        });
    }

    private function label(array $node)
    {
        return array_keys($node)[0];
    }

    private function children(array $node)
    {
        return array_pop($node);
        return array_values($node)[0];
    }
}
