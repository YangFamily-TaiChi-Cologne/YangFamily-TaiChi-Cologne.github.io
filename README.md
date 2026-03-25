# github pages

* [current www.taichidaokoeln.de](https://www.taichidaokoeln.de)
* [issues](https://github.com/YangFamily-TaiChi-Cologne/dao-eV/issues)
* [protopype](https://YangFamily-TaiChi-Cologne.github.io)

## claude

```fish
/plugin install discord@claude-plugins-official
scp .claude/channels/discord/.env fbb@wien:/Users/fbb/c/github/YangFamily-TaiChi-Cologne.github.io/.claude/channels/discord/.env
DISCORD_STATE_DIR="$(pwd)/.claude/channels/discord" claude -c --dangerously-skip-permissions --channels plugin:discord@claude-plugins-official
```

## manual

```fish
npm install # install dependencies
npm run start # run local server
```
