import React from 'react'
import Section from './Section'
import Title from '../common/Title'

function OurTeam() {
    return (
        <div className='mb-10'>
            <Title title={'Nuestro equipo'} textColor={'text-black'} />
            <Section
                title={'Profesor'}
                people={[
                    {
                        name: 'Dr. Miguel Jimeno Paba',
                        img: 'https://media.licdn.com/dms/image/C5603AQGEG3qFyxN2Uw/profile-displayphoto-shrink_100_100/0/1658951618029?e=1676505600&v=beta&t=FhZm-m1fT01Mx7hFwMHTClgcoS0CJmu1UzMjHShLeH8',
                        link: 'https://github.com/majimeno'
                    }
                ]}
            />
            <Section
                title={'Móvil'}
                people={[
                    {
                        name: 'Camilo J. Sinning Lopez',
                        img: 'https://avatars.githubusercontent.com/u/61607058?v=4',
                        link: 'https://github.com/CamiloSinningUN'
                    },
                    {
                        name: 'Breynner S. Hurtado Acuña',
                        img: 'https://avatars.githubusercontent.com/u/61608216?v=4',
                        link: 'https://github.com/breynner1'
                    },
                    {
                        name: 'Carlos A. Otero Peña',
                        img: 'https://avatars.githubusercontent.com/u/55295090?v=4',
                        link: 'https://github.com/carlos204658'
                    },
                    {
                        name: 'Christian D. Manga Arrazola',
                        img: 'https://avatars.githubusercontent.com/u/68516237?v=4',
                        link: 'https://github.com/ChristianMA19'
                    },
                    {
                        name: 'Daniel E. Martinez Arias',
                        img: '',
                        link: 'https://github.com/danielking1205'
                    },
                    {
                        name: 'Fernando Acuña Garcia',
                        img: '',
                        link: 'https://github.com/iNaFeR02'
                    },
                    {
                        name: 'Shalem A. Janna Diaz',
                        img: 'https://avatars.githubusercontent.com/u/70728090?v=4',
                        link: 'https://github.com/SJanna)'
                    },
                    {
                        name: 'Harry M. Cepeda Reales',
                        img: 'https://avatars.githubusercontent.com/u/43783624?v=4',
                        link: 'ttps://github.com/Harrison0123'
                    }
                ]}
            />
            <Section
                title={'Web'}
                people={[
                    {
                        name: 'Laura A. Benavides Celis',
                        img: 'https://avatars.githubusercontent.com/u/79348544?v=4',
                        link: 'https://github.com/laura13272002'
                    },
                    {
                        name: 'Leonardo D. Lizcano Pinto',
                        img: 'https://avatars.githubusercontent.com/u/74639893?v=4',
                        link: 'https://github.com/LeoLizc'
                    },
                    {
                        name: 'Leonardo D. Vergara Marquez',
                        img: 'https://avatars.githubusercontent.com/u/73978713?v=4',
                        link: 'https://github.com/leovergaramarq'
                    },
                    {
                        name: 'Yenelis Molina Zurita',
                        img: 'https://avatars.githubusercontent.com/u/68799778?v=4',
                        link: 'https://github.com/Pupa08'
                    },
                    {
                        name: 'Jesus D. Duran Cardenas',
                        img: 'https://avatars.githubusercontent.com/u/56171883?v=4',
                        link: 'https://github.com/Davidduran2404'
                    }
                ]}
            />
            <Section
                title={'Documentación'}
                people={[
                    {
                        name: 'Felipe A. De Lima Correa',
                        img: 'https://avatars.githubusercontent.com/u/61438325?v=4',
                        link: 'https://github.com/d3l1m'
                    },
                    {
                        name: 'Marta P. Arrieta Contreras',
                        img: 'https://avatars.githubusercontent.com/u/71568184?v=4',
                        link: 'https://github.com/Marta-Arrieta'
                    }
                ]}
            />
        </div>
    )
}

export default OurTeam