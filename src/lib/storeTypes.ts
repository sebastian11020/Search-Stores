export interface storeTypes {
    id: number;
    storeName: string;
    place: {
        name: string;
        type: string;
        latitude: string | null;
        longitude: string | null;
        place: {
            name: string;
            type: string;
            latitude: string | null;
            longitude: string | null;
            place: {
                name: string;
                type: string;
                latitude: string | null;
                longitude: string | null;
                place: null;
            };
        };
    };
}