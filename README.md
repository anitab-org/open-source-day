# Open Source Day Site

Website for the Grace Hoppper Celebration 2023 Open Source Day hackathon

## Setup

- Install the prerequisites from:  https://jekyllrb.com/docs/#prerequisites
- To run the site locally:

```bash
bundle exec jekyll serve
```

==Note==

- When using the latest versions of ruby that are installed with homebrew, note that webrick is not included by default as explained in [this github issue](https://github.com/github/pages-gem/issues/752).
- To resolve this you may either use ruby 2.7 or manually add webrick using the command below:

```bash
bundle add webrick
```

- Build before you commit

```bash
bundle exec jekyll build
git add .
git commit -m "<your message>"
```

- Push your changes to a PR

## Container Based Build/Setup

Run the following command from your terminal

```shell
docker-compose -f docker/docker-compose.yaml up --build
```

You may access the page, locally generated at
[http://localhost:4000](http://localhost:4000) from your browser.

## Contributing

Please create a PR with as many detail info about your change and screenshots if possible.