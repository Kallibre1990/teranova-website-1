# AGENTS.md — teranova-website-1

Перед любой работой Codex обязан полностью прочитать `CLAUDE.md` в корне этого
репозитория: это общий набор продуктовых, технических и безопасностных правил для
Claude Code и Codex.

Если репозиторий открыт внутри workspace Teranova, дополнительно прочитать:

- `../AI_COORDINATION/00_PROTOCOL.md`;
- `../AI_COORDINATION/ACTIVE_TASKS/`;
- `../AI_COORDINATION/Codex/STATUS.md`;
- `../AI_COORDINATION/Claude/STATUS.md`.

Код разрешено менять только после успешного захвата задачи через
`../AI_COORDINATION/scripts/claim-task.sh`. Для каждой задачи использовать ветку
`codex/<task>`, не пушить напрямую в `main`. Ревью работы Claude Code оформлять
отдельным предложением в `../AI_COORDINATION/Codex/PROPOSALS_TO_CLAUDE/`.

`docs/CONTENT-RULES.md` и `docs/IMAGERY.md` остаются высшими продуктовыми правилами
репозитория. Готовность подтверждается фактической сборкой и проверкой результата.
