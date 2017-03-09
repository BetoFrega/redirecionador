# redirecionador

> A javascript redirect that activates on `mousemove` and only on the first visit (optional);

## Why

- The user must be able to see the countdown for it to make sense, and that doesn't happen with the new-tab middle-click frenzy that took over users' minds.
- Google doesn't like javascript redirects very much and Google doesn't move the mouse even when it executes javascript :)
- Users should be able to visit the site they were originally trying to, hence the "only on the first visit" thing

## Usage

```html
<div id="countdown-message"></div>
<script>
    redirecionador('http://gauge.com.br');
</script>
```

## API


### redirecionador(url, [options])

Redirects the user after the specified amount of seconds. Countdown starts on `mousemove`

#### options

##### timeout

- Type: `integer`
- Default: `5`

Amount of seconds before redirection happens.

##### countdownElementId

- Type: `string`
- Default: `'countdown-message'`

ID for the element that receives the countdown message.

##### countdownTemplate

- Type: `string`
- Default: `'Você será redirecionado em #s'`

Template message. `'#'` is replaced by the amount of seconds left.

##### onlyFirstVisit

- Type: `boolean`
- Default: `true`

Specifies if the redirection only happens on the first visit.

## License

MIT © Roberto Frega
