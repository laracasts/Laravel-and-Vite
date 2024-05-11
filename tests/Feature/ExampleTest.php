<?php

it('see Laracasts in welcome view', function () {
    // $this->withoutVite();
    $this->view('welcome')->assertSee('Laracasts');
});
