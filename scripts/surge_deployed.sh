#!/bin/bash
curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{"app":"flatter.cards", "url": "https://flatter.cards", "hosting": "Surge.sh"}' https://adriaan-telegram.herokuapp.com/notify/deploy
