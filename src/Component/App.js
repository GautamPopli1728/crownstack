import React from 'react';
import Header from './Header'
import '../Asset/main.css'
import Home from './Home';
import List from './List';
import Details from './Details';
import Footer from './Footer';

class App extends React.Component {

    state = {
        data: [
            {
                "dealers_id": "EDIL",
                "opco": "EDIL",
                "name": "ILLINOIS",
                "branches": [
                    {
                        "branch_id": "BUR",
                        "name": "Burr Ridge",
                        "categories": [
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "ELG",
                        "name": "Itasca",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "ROC",
                        "name": "Rockford",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "forklift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "dealers_id": "EDIN",
                "opco": "EDKY",
                "name": "INDIANA",
                "branches": [
                    {
                        "branch_id": "EVA",
                        "name": "Evansville",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Carry Deck Crane",
                                "image": "carry_deck_crane.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    },
                                    {
                                        "name": "Push Around",
                                        "image": "single_man_lifts_push_around.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Personnel Cart",
                                "image": "personnel_cart.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "personnel_cart_rough_terrain.png"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "dealers_id": "EDKY",
                "opco": "EDKY",
                "name": "KENTUCKY",
                "branches": [
                    {
                        "branch_id": "BOW",
                        "name": "Bowling Green",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Carry Deck Crane",
                                "image": "carry_deck_crane.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "forklift_rough_terrain.png"
                                    },
                                    {
                                        "name": "Tugger",
                                        "image": "forklift_tugger.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Personnel Cart",
                                "image": "personnel_cart.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "personnel_cart_rough_terrain.png"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "HOP",
                        "name": "Hopkinsville",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "LOU",
                        "name": "Louisville",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Carry Deck Crane",
                                "image": "carry_deck_crane.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Facility Maintenance & Cleaning",
                                "image": "facility_and_maintenance.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Tugger",
                                        "image": "forklift_tugger.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Personnel Cart",
                                "image": "personnel_cart.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "personnel_cart_rough_terrain.png"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "PAD",
                        "name": "Paducah",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Carry Deck Crane",
                                "image": "carry_deck_crane.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Personnel Cart",
                                "image": "personnel_cart.png",
                                "subcategories": [
                                    {
                                        "name": "Rough Terrain",
                                        "image": "personnel_cart_rough_terrain.png"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "LEX",
                        "name": "Lexington",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Carry Deck Crane",
                                "image": "carry_deck_crane.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Swing Mast",
                                        "image": "forklift_swingmast.png"
                                    },
                                    {
                                        "name": "Tugger",
                                        "image": "forklift_tugger.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    },
                                    {
                                        "name": "Push Around",
                                        "image": "single_man_lifts_push_around.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Personnel Cart",
                                "image": "personnel_cart.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "personnel_cart_rough_terrain.png"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "dealers_id": "EDNJ",
                "opco": "EDPA",
                "name": "NEW JERSEY",
                "branches": [
                    {
                        "branch_id": "MTL",
                        "name": "Mt. Laurel",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    }
                                ]
                            },
                            {
                                "name": "Personnel Cart",
                                "image": "personnel_cart.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "dealers_id": "EDOH",
                "name": "OHIO",
                "opco": "OHIO",
                "branches": [
                    {
                        "branch_id": "MON",
                        "name": "Monroe",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Carry Deck Crane",
                                "image": "carry_deck_crane.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Swing Mast",
                                        "image": "forklift_swingmast.png"
                                    },
                                    {
                                        "name": "Tugger",
                                        "image": "forklift_tugger.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    },
                                    {
                                        "name": "Push Around",
                                        "image": "single_man_lifts_push_around.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Personnel Cart",
                                "image": "personnel_cart.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "personnel_cart_rough_terrain.png"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "CIN",
                        "name": "Cincinnati",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Carry Deck Crane",
                                "image": "carry_deck_crane.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Swing Mast",
                                        "image": "forklift_swingmast.png"
                                    },
                                    {
                                        "name": "Tugger",
                                        "image": "forklift_tugger.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    },
                                    {
                                        "name": "Push Around",
                                        "image": "single_man_lifts_push_around.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Personnel Cart",
                                "image": "personnel_cart.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "personnel_cart_rough_terrain.png"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "DAY",
                        "name": "Dayton",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Carry Deck Crane",
                                "image": "carry_deck_crane.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Swing Mast",
                                        "image": "forklift_swingmast.png"
                                    },
                                    {
                                        "name": "Tugger",
                                        "image": "forklift_tugger.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    },
                                    {
                                        "name": "Push Around",
                                        "image": "single_man_lifts_push_around.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Personnel Cart",
                                "image": "personnel_cart.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "personnel_cart_rough_terrain.png"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "LEB",
                        "name": "Lebanon",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Carry Deck Crane",
                                "image": "carry_deck_crane.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Swing Mast",
                                        "image": "forklift_swingmast.png"
                                    },
                                    {
                                        "name": "Tugger",
                                        "image": "forklift_tugger.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    },
                                    {
                                        "name": "Push Around",
                                        "image": "single_man_lifts_push_around.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Personnel Cart",
                                "image": "personnel_cart.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "personnel_cart_rough_terrain.png"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "dealers_id": "EDPA",
                "opco": "EDPA",
                "name": "PENNSYLVANIA",
                "branches": [
                    {
                        "branch_id": "ALN",
                        "name": "Allentown",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    }
                                ]
                            },
                            {
                                "name": "Carry Deck Crane",
                                "image": "carry_deck_crane.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    }
                                ]
                            },
                            {
                                "name": "Earth Moving",
                                "image": "earth_moving.png",
                                "subcategories": [
                                    {
                                        "name": "Skidsteer",
                                        "image": "earth_moving_skid_steer.png"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "LAN",
                        "name": "Lancaster",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "MEC",
                        "name": "Mechanicsburg",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Tugger",
                                        "image": "forklift_tugger.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "WIL",
                        "name": "Williamsport",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "dealers_id": "EDTX",
                "opco": "EDTX",
                "name": "TEXAS",
                "branches": [
                    {
                        "branch_id": "AUS",
                        "name": "Austin",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Atrium Lift"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    },
                                    {
                                        "name": "Towable",
                                        "image": "booms_towable.png"
                                    }
                                ]
                            },
                            {
                                "name": "Earth Moving",
                                "image": "earth_moving.png",
                                "subcategories": [
                                    {
                                        "name": "Backhoe - 2WD",
                                        "image": "earth_moving_backhoe.png"
                                    },
                                    {
                                        "name": "Compact Track Loader",
                                        "image": "earth_moving_compact_truck_loader.png"
                                    },
                                    {
                                        "name": "Mini-Excavator",
                                        "image": "earth_moving_mini_excavator.png"
                                    },
                                    {
                                        "name": "Skidsteer",
                                        "image": "earth_moving_skid_steer.png"
                                    }
                                ]
                            },
                            {
                                "name": "Facility Maintenance & Cleaning",
                                "image": "facility_and_maintenance.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Piggy Back",
                                        "image": "forklift_piggyback.png"
                                    }
                                ]
                            },
                            {
                                "name": "Material Lift",
                                "image": "material_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Personnel Cart",
                                "image": "personnel_cart.png",
                                "subcategories": [
                                    {
                                        "name": "Rough Terrain",
                                        "image": "personnel_cart_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    },
                                    {
                                        "name": "Push Around",
                                        "image": "single_man_lifts_push_around.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    },
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "BEA",
                        "name": "Beaumont",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "BRA",
                        "name": "Brazosport",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "CCH",
                        "name": "Corpus Christi",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Earth Moving",
                                "image": "earth_moving.png",
                                "subcategories": [
                                    {
                                        "name": "Mini-Excavator",
                                        "image": "earth_moving_mini_excavator.png"
                                    },
                                    {
                                        "name": "Skidsteer",
                                        "image": "earth_moving_skid_steer.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "DAL",
                        "name": "Dallas",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Personnel Cart",
                                "image": "personnel_cart.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    },
                                    {
                                        "name": "Push Around",
                                        "image": "single_man_lifts_push_around.png"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "FOR",
                        "name": "Ft. Worth",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    },
                                    {
                                        "name": "Atrium Lift"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Piggy Back",
                                        "image": "forklift_piggyback.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "forklift_rough_terrain.png"
                                    },
                                    {
                                        "name": "Swing Mast",
                                        "image": "forklift_swingmast.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Personnel Cart",
                                "image": "personnel_cart.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    },
                                    {
                                        "name": "Push Around",
                                        "image": "single_man_lifts_push_around.png"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "HOU",
                        "name": "Houston",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "LON",
                        "name": "Longview",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "forklift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "MCA",
                        "name": "McAllen",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    },
                                    {
                                        "name": "Towable",
                                        "image": "booms_towable.png"
                                    }
                                ]
                            },
                            {
                                "name": "Earth Moving",
                                "image": "earth_moving.png",
                                "subcategories": [
                                    {
                                        "name": "Compact Track Loader",
                                        "image": "earth_moving_compact_truck_loader.png"
                                    },
                                    {
                                        "name": "Skidsteer",
                                        "image": "earth_moving_skid_steer.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Swing Mast",
                                        "image": "forklift_swingmast.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    },
                                    {
                                        "name": "Push Around",
                                        "image": "single_man_lifts_push_around.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "SAN",
                        "name": "San Antonio",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Earth Moving",
                                "image": "earth_moving.png",
                                "subcategories": [
                                    {
                                        "name": "Backhoe - 2WD",
                                        "image": "earth_moving_backhoe.png"
                                    },
                                    {
                                        "name": "Mini-Excavator",
                                        "image": "earth_moving_mini_excavator.png"
                                    },
                                    {
                                        "name": "Skidsteer",
                                        "image": "earth_moving_skid_steer.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Piggy Back",
                                        "image": "forklift_piggyback.png"
                                    },
                                    {
                                        "name": "Tugger",
                                        "image": "forklift_tugger.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    },
                                    {
                                        "name": "Push Around",
                                        "image": "single_man_lifts_push_around.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Material Lift",
                                "image": "material_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Personnel Cart",
                                "image": "personnel_cart.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "SHE",
                        "name": "Sherman",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Piggy Back",
                                        "image": "forklift_piggyback.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "branch_id": "WAC",
                        "name": "Waco",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    },
                                    {
                                        "name": "Atrium Lift"
                                    },
                                    {
                                        "name": "Towable",
                                        "image": "booms_towable.png"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "forklift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    },
                                    {
                                        "name": "Push Around",
                                        "image": "single_man_lifts_push_around.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Material Lift",
                                "image": "material_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "dealers_id": "EDWV",
                "opco": "OHIO",
                "name": "WEST VIRGINIA",
                "branches": [
                    {
                        "branch_id": "NIT",
                        "name": "Nitro",
                        "categories": [
                            {
                                "name": "Booms",
                                "image": "booms.png",
                                "subcategories": [
                                    {
                                        "name": "Articulated - Electric",
                                        "image": "booms_articulated_electric.png"
                                    },
                                    {
                                        "name": "Articulated - Engine",
                                        "image": "booms_articulated_engine.png"
                                    },
                                    {
                                        "name": "Straight",
                                        "image": "booms_straight.png"
                                    }
                                ]
                            },
                            {
                                "name": "Carry Deck Crane",
                                "image": "carry_deck_crane.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Forklifts",
                                "image": "forklifts.png",
                                "subcategories": [
                                    {
                                        "name": "Electric",
                                        "image": "forklift_electric.png"
                                    },
                                    {
                                        "name": "IC Cushion",
                                        "image": "forklift_ic_cushion.png"
                                    },
                                    {
                                        "name": "IC Pneumatic",
                                        "image": "forklift_ic_pneumatic.png"
                                    },
                                    {
                                        "name": "Swing Mast",
                                        "image": "forklift_swingmast.png"
                                    },
                                    {
                                        "name": "Tugger",
                                        "image": "forklift_tugger.png"
                                    }
                                ]
                            },
                            {
                                "name": "Scissor Lifts",
                                "image": "scissor_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Slab",
                                        "image": "scissor_lift_slab.png"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "scissor_lift_rough_terrain.png"
                                    }
                                ]
                            },
                            {
                                "name": "Single Man Lifts",
                                "image": "single_man_lifts.png",
                                "subcategories": [
                                    {
                                        "name": "Driveable",
                                        "image": "single_man_lifts_driveable.png"
                                    },
                                    {
                                        "name": "Push Around",
                                        "image": "single_man_lifts_push_around.png"
                                    }
                                ]
                            },
                            {
                                "name": "Telehandlers",
                                "image": "telehandlers.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    }
                                ]
                            },
                            {
                                "name": "Personnel Cart",
                                "image": "personnel_cart.png",
                                "subcategories": [
                                    {
                                        "name": "NA"
                                    },
                                    {
                                        "name": "Rough Terrain",
                                        "image": "personnel_cart_rough_terrain.png"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],

        listData: [],
        detailsListData: []
    }

    selectedCountryBranchHandler = (selectedObj) => {
        let listData = JSON.parse(JSON.stringify(this.state.listData))
        let arr = []

        if (selectedObj.country && selectedObj.branch) {
            this.state.data.map(country => {
                if (country.name === selectedObj.country) {
                    country.branches.map(branch => {
                        if (branch.name === selectedObj.branch) {
                            arr = branch.categories
                        }
                    })
                }
            })
        }
        else if (selectedObj.country) {
            this.state.data.map(country => {
                if (country.name === selectedObj.country) {
                    country.branches.map(branch => {
                        arr = arr.concat(branch.categories)
                    })
                }
            })
        }
        this.setState({ listData: arr, activePage: "list" })
    }

    detailsHandler = (index, branchName) => {
        let detailsListData = JSON.parse(JSON.stringify(this.state.detailsListData))
        let listData = JSON.parse(JSON.stringify(this.state.listData))
        detailsListData = listData[index].subcategories
        this.setState({ detailsListData, activePage: "detail" })
    }

    backButtonHandler = () => {
        this.setState({activePage : "list"})
    }

    render() {
        return (
            <div>
                <Header data={this.state.data} selectedCountryBranchHandler={this.selectedCountryBranchHandler} />
                {this.state.activePage === "list" ?
                    <List listData={this.state.listData} detailsHandler={this.detailsHandler} />
                    :
                    this.state.activePage === "detail" ?
                        <Details detailsListData={this.state.detailsListData} backButtonHandler={this.backButtonHandler}/>
                        :
                        <Home />
                }
                <Footer />
            </div>
        )
    }
}

export default App;