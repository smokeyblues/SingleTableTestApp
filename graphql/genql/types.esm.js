export default {
    "scalars": [
        1,
        3,
        6
    ],
    "types": {
        "Chapter": {
            "id": [
                1
            ],
            "text": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "String": {},
        "Idea": {
            "chapters": [
                0
            ],
            "content": [
                3
            ],
            "id": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "ID": {},
        "Mutation": {
            "addChapter": [
                0,
                {
                    "ideaID": [
                        1,
                        "String!"
                    ],
                    "text": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createIdea": [
                2,
                {
                    "content": [
                        1,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "Query": {
            "ideas": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "Boolean": {}
    }
}