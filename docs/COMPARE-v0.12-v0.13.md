# A And B Application Check

The two comparison versions were pushed sequentially:

- A v0.12.0, `60088fa`: common white alpha 0.80.
- B v0.13.0, `15e224c`: common white alpha 0.20.

Only after B was pushed, its companion was applied through the Codex++ user
extension lifecycle. The live marker reported 0.13.0 and the script loaded.
Projects and Plugins page owners, sidebar, Codex++ page, home hero and input
body computed alpha 0.20. Search and navigation remained usable.

Live screenshot-pixel readability gates passed separately on Projects, Plugins,
Codex++ settings, home and the populated conversation with zero failures.
Covered native page content stayed hidden under Codex++ and restored after
native navigation; the settings modal itself remained transparent inside the
one white page fill. No app restart was performed.

The matching companion was installed persistently with its backup retained.
These live checks used the already active DreamSkin base plus the companion's
complete white-fill overrides; they do not claim the manager imported B's
base ZIP. B's packaged base was independently accepted by the Rust importer
and Safe CSS compiler.

The user's subsequent request selects 50% common fill and performance
optimization in v0.14.0. A and B ZIPs remain available for comparison.
