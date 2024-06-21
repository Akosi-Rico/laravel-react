<?php

namespace App\Helper;

use App\Contracts\Manage\TaskInterface;

trait TaskHelper
{
    public static function loadResponse($message, $code, TaskInterface $format)
    {
        return $format->output($message, $code);
    }
}
