export interface IStarlink {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string;
    },
    links: {
        article_link: string;
        video_link: string;
    },
    rocket: IRocket,
    second_stage: {
        payloads: [
            IPayloads
        ]
    }
}


interface IRocket {
    rocket_name: string;
    first_stage: {
        cores: [
            ICores
        ]
    }
}

interface ICores {
    flight: number
    core: {
        reuse_count: number;
        status: string;
    }
}

interface IPayloads {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}
