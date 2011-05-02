# jQuery Toaster

`jquery-toaster` is a jQuery plugin that shows stacked transient notification messages. 

<img alt="Sample image showing 'toast' notifications" src="./docs/sample.png">
     
## Features

* Progressive enhancement allows toasts to be read when JavaScript is disabled
* Support for *info*, *notice*, *warning* and *error* notices
* Straight-forward API: `$(selector).toast()` to get started
* Easily tailored through options and events
* Fully customizable

## Demos

## Documentation

To get started, just use `$(selector).toast()` -- whatever `selector` matches will be shown as a toast message. You can also create toasts without existing markup in the page by passing the message as the jQuery selector: `$('<p>A toast message.</p>').toast()`. To close a toast message, use `$(selector).toast('close')`.

The `toast()` plugin can optionally be given a hash of options to control its behaviour. For example, to make a toast sticky (so it doesn't fade out automatically), set the `sticky` option like so: `$(selector).toast({ sticky: true })`.

See the [project wiki][] for documentation on all the supported options and events.

## Download

Download the [latest version][] of the plugin, or clone the [GitHub project][] to get the full source. Feel free to fork and improve -- pull requests are appreciated!

## License

The jQuery Toaster is available under the MIT license, the same as jQuery itself. See [LICENSE.md][] for the full terms and conditions.


  [project wiki]:     https://github.com/laurie71/jquery-toaster/wiki
  [latest version]:   https://github.com/laurie71/jquery-toaster/archives/v0.1.0
  [GitHub project]:   https://github.com/laurie71/jquery-toaser/
  [LICENSE.md]:       ./License.md