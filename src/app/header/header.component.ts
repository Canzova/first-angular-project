/*
    🧠 Simple analogy
    { Component } = “Give me Component from this module.”
    Without {} = “Give me the default item from this module.”
    Angular uses named exports, so you must use {}.
*/

import { Component } from "@angular/core";

@Component({
    selector : 'header-component',
    standalone : true, // This is bydefault true for angular19 and above
    templateUrl : './header.component.html',
    styleUrl : './header.component.css'
})

export class HeaderComponent{}