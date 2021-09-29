# Parcel 2, Tailwind & Tailwind/jit with Preact and TypeScript
<img style="text-align: center" src="https://i.imgur.com/xHlol6w.png"/>

## Why
We are in 2021, and it is almost impossible to find an entire functional project with this configuration and working as expected.

The problems you may encounter in Parcel 2 are related to transpilation (it uses Babel, and you must force it to use `tsc` otherwise it skips `tsconfig.js`) as well as problems with PostCSS versions (Tailwind requires version 8).

Also, Preact presents complexity with aliases.

This project brings all these tools together:

- parcel: "^2.0.0-nightly.632"
- tailwindcss: "^2.0.4"
- @tailwindcss/jit: "^0.1.17"
- typescript: "^4.2.3"
- preact: "^10.5.13"

## How

To get started run `yarn start`.