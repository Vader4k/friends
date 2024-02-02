import { bobby, dan, nelly, milly, elise, edward } from '../assets'

import { IoPersonRemoveOutline, IoPersonAddOutline  } from "react-icons/io5";
import { GoTag } from "react-icons/go";
export const friendOpen = [
    {
        name: 'Bobby Brown',
        update: 'Najeel verwick is a common friend',
        friend: [
            {
                add: <IoPersonAddOutline />,
                remove: <IoPersonRemoveOutline />
            }
        ],
        img: bobby
    },
    {
        name: 'Dan Walker',
        update: 'You have 4 common friends ',
        friend: [
            {
                add: <IoPersonAddOutline />,
                remove: <IoPersonRemoveOutline />
            }
        ],
        img: dan
    },
    {
        name: 'Nelly Schwartz',
        update: 'You are now friends with nelly schwatz. Check her profile',
        tag: <GoTag />,
        img: nelly
    },
    {
        name: 'Milly Augustine',
        update: 'Najeel verwick is a common friend',
        friend: [
            {
                add: <IoPersonAddOutline />,
                remove: <IoPersonRemoveOutline />
            }
        ],
        img: milly
    },
    {
        name: 'Elise Walker',
        update: 'You are now friends with Elise walker, Check her profile',
        tag: <GoTag />,
        img: elise
    },
    {
        name: 'Edward Mayers',
        update: 'You are now friends with Edward Mayers. Check his profile',
        tag: <GoTag />,
        img: edward
    }
]