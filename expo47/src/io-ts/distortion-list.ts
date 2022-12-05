import { Data } from './distortion'
import * as T from 'io-ts'

const list: Data[] = [
    {
        slug: "all-or-nothing",
        emoji: ["🌓"],
        labelKey: "all_or_nothing_thinking",
        descriptionKey: "all_or_nothing_thinking_one_liner"
    },
    {
        slug: "overgeneralization",
        emoji: ["👯‍"],
        labelKey: "over_generalization"
    },
    {
        slug: "mind-reading",
        emoji: ["🧠", "💭"]
    },
    {
        slug: "fortune-telling",
        emoji: ["🔮"]
    },
    {
        slug: "magnification-of-the-negative",
        emoji: ["👎"]
    },
    {
        slug: "minimization-of-the-positive",
        emoji: ["👍"]
    },
    {
        slug: "catastrophizing",
        emoji: ["🤯", "💥"]
    },
    {
        slug: "emotional-reasoning",
        emoji: ["🎭"]
    },
    {
        slug: "should-statements",
        emoji: ["✨"]
    },
    {
        slug: "labeling",
        emoji: ["🏷", "🍙"]
    },
    {
        slug: "self-blaming",
        emoji: ["👁", "🚷"]
    },
    {
        slug: "other-blaming",
        emoji: ["🧛‍", "👺"]
    }
]
// TODO typescript 4.9
// as const satisfies Data[]