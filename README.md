# jQuery Toaster

`jquery-toaster` is a jQuery plugin that shows stacked transient notification messages. 

<img alt="Sample image showing 'toast' notifications" src="./docs/sample.png">
     
## Features

* Progressive enhancement allows toasts to be read when JavaScript is disabled
* Support for *info*, *notice*, *warning* and *error* notices
* Straight-forward API: `$(selector).toast()` to get started
* Easily tailored through options and events
* Fully customizable

## Demo

See the plugin in action on the [demo][] page.

## Documentation

To get started, just use `$(selector).toast()` -- whatever `selector` matches will be shown as a toast message. You can also create toasts without existing markup in the page by passing the message as the jQuery selector: `$('<p>A toast message.</p>').toast()`. To close a toast message, use `$(selector).toast('close')`.

The `toast()` plugin can optionally be given a hash of options to control its behaviour. For example, to make a toast sticky (so it doesn't fade out automatically), set the `sticky` option like so: `$(selector).toast({ sticky: true })`.

See the project [wiki][] for documentation on all the supported options and events.

## Download

Download the plugin in [zip][] or [tar][] format, or clone the project with git to get the full source: 

    git clone git://github.com/laurie71/jquery-toaster

Feel free to fork and improve -- pull requests are appreciated!

## License

The jQuery Toaster is available under the MIT license, the same as jQuery itself. See [LICENSE.md][] for the full terms and conditions.

  [zip]:            http://github.com/laurie71/jquery-toaster/zipball/master
  [tar]:            http://github.com/laurie71/jquery-toaster/tarball/master
  [demo]:           https://laurie71.github.com/jquery-toaster/
  [wiki]:           https://github.com/laurie71/jquery-toaster/wiki
  [GitHub project]: https://github.com/laurie71/jquery-toaser/
  [LICENSE.md]:     ./LICENSE.md
