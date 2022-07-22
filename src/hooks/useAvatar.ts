import { useState, useEffect } from 'react';

const baseUrl = 'https://api.multiavatar.com/';

const useAvatar = () => {

    const [avatar, setAvatar] = useState<string>((Math.random() + 1).toString(10).substring(2));

    const randomize = () => {
        setAvatar((Math.random() + 1).toString(10).substring(2));
    }

    return {
        uri: `${baseUrl}${avatar}.png`,
        randomize
    }
}

export default useAvatar;