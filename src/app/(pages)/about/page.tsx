'use client'

import SingleBanner from '../components/SingleBanner'
import Timeline from './components/Timeline'
import SectionMVV from '@/app/template/SectionMVV'
import SectionEquipeGestora from '@/app/template/SectionEquipeGestora'
import SectionMembers from './components/SectionMembers'

export default function Courses() {

    return (
        <>
            <SingleBanner
                title="Sobre o cedup"
                backgroundImage="https://tioalisson.github.io/Projeto-Cedup.github.io/assets/img/bg-doc.svg"
            />
            <Timeline />
            <SectionMVV showButton={false} />
            <SectionEquipeGestora />
            <SectionMembers />
        </>
    )
}
