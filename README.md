# cv-ui

UI concept for my sister's website. ([demo](https://www.dtjv.io/cv-ui/))

<br>

![website screen shot](./media/screen-shot.png)

<br>

## Development

Install [live-server](https://github.com/tapio/live-server) globally.

```sh
$ git clone https://github.com/dtjv/cv-ui.git
$ cd cv-ui/
$ yarn

# in terminal 1
$ yarn watch:pug

# in terminal 2
$ yarn watch:css

# in terminal 3
$ yarn start
```

You can issue `yarn run` to see a list of all scripts available.

## Notes

This project's build step doesn't move static assets to `dist/`. Instead, static assets are kept in `dist/` - which means `dist/` is included in the repo.

## License

The source code is available under the [MIT license](LICENSE).
