import { proxy } from "valtio";

const state = proxy({
    intro: true,
    current: 'side_flaps',
    currentColor: "#af1a2b",
    items: {
        side: "#e3e3e3",
        back_flipper: "#ffffff",
        front_down: "#e3e3e3",
        slashes: "#191a11",
        mini_flaps: "#3d3d3d",
        side_flaps: "#af1a2b",
        back_flip: "#af1a2b",
        logo: "#3a3a3a",
        upper_side: "#ad1b29",
        upper_soft: "#3a3a3a",
        softy: "#0e0f10",
        big_front: "#0e0f10",
        upper_bottom_bottom: "#d7d2d1",
        bottooom: "#7c1013",
        bottom_logo: "#3a3a3a",
        middle_sides: "#b01826",
        front_side: "#b31929",
    },
});

export default state;
