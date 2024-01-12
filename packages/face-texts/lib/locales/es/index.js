export default [
    [
        "hello",
        {
            xs: "Hola",
            sm: "Hola!",
            md: "Hola! Que tal?",
            lg: "Hola {user}! Que tal?",
        }
    ],
    [
        "day_interval",
        [
            { xs: "Nunca" },
            { md: "Todos los días", sm: "Cada día", xs: "Diario" },
            { md: "Cada {count} días", sm: "{count} días", xs: "{count}d" }
        ]
    ],
    [
        "cat",
        [
            { sm: { m: "gatos", f: "gatas" } },
            { sm: { m: "gato", f: "gata" } }
        ]
    ]
];
