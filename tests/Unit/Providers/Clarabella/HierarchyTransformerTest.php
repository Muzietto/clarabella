<?php

namespace Tests\Unit\Providers\Clarabella;

use App\Providers\Clarabella\HierarchyTransformer;

class HierarchyTransformerTest extends \PHPUnit_Framework_TestCase
{
    private $transformer;

    protected function setUp()
    {
        $this->transformer = new HierarchyTransformer();
    }

    public function testSerializeEmpty()
    {
        $this->assertEquals([], $this->transformer->serialize([]));
    }

    public function testSerializeTwoElements()
    {
        $this->assertEquals(
            [['pete', 'nick'], ['barbara', 'nick']],
            $this->transformer->serialize([
                'pete' => 'nick',
                'barbara' => 'nick',
            ])
        );
    }

    public function testCanFindNodes()
    {
        $this->assertTrue(
            $this->transformer->found(
                'c',
                ['a' => ['b' => ['c' => []]]]
            )
        );
    }

    public function testAppendLeaves()
    {
        $this->assertEquals(
            [
                'a' => ['c' => []]
            ],
            $this->transformer->append('c', 'a', ['a' => []])
        );
    }

    public function testAppendLeaves2()
    {
        $this->assertEquals(
            [
                'a' => ['b' => [], 'c' => []]
            ],
            $this->transformer->append('c', 'a', ['a' => ['b' => []]])
        );
    }

    public function testAppend3()
    {
        $this->assertEquals(
            [
                'a' => ['b' => ['d' => ['f' => []]], 'c' => ['e' => []]]
            ],
            $this->transformer->append('f', 'd', ['a' => ['b' => ['d' => []], 'c' => ['e' => []]]])
        );
    }

}
