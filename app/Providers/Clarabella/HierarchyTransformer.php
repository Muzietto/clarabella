<?php

namespace App\Providers\Clarabella;

use Illuminate\Support\ServiceProvider;

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
}
