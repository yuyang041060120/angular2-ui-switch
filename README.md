# Description

This is a simple iOS 7 style switch component for Angular2.

![alt](logo.png)

Inspired by [switchery](https://github.com/abpetkov/switchery) - in angular2.

# Installation

```bash
npm install angular2-ui-switch --save
```

# Usage

```javascript
import { Component } from '@angular/core';
import { UiSwitchComponent } from 'angular2-ui-switch';

@Component({
    selector: 'app',
    template: `
        <ui-switch></ui-switch>
    `,
    directives: [UiSwitchComponent]
})
export class AppComponent {
}
```

# Params

### checked

> type: *boolean*

> default: false

```html
<ui-switch [checked]="true"></ui-switch>
```

### disabled

> type: *boolean*

> default: false

```html
<ui-switch [disabled]="true"></ui-switch>
```

### change

> type: *event*

> default: noop

```html
<ui-switch (change)="enable = $event"></ui-switch>
```

### size

> type: *string*

> default: medium

```html
<ui-switch size="large"></ui-switch>
```

```html
<ui-switch size="small"></ui-switch>
```

### color

> type: *string*

> default: rgb(100, 189, 99)

```html
<ui-switch color="red"></ui-switch>
```

# License
MIT
