import React from 'react'
import { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpFromBracket, faFileImport, faRocket } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const FooterComponent = () => {
  return (
    <div className='flex justify-between items-baseline py-8 px-4 text-black dark:text-white hover:text-slate-600 dark:hover:text-slate-200'>
        <Link href="#home" className='flex items-baseline gap-3'>
            <FontAwesomeIcon icon={faRocket} className='text-md text-gray-500 dark:text-gray-400'/>
            <p className='text-xs underline text-gray-500 dark:text-gray-400'>Return to Top</p>
        </Link>
        <div>
            <Link href='https://www.linkedin.com/in/elizabeth-trotter/' target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} className='pe-4 text-black dark:text-white text-4xl hover:text-slate-600 dark:hover:text-slate-200'/>
            </Link>
            <Link href='https://github.com/et120' target='_blank'>
                <FontAwesomeIcon icon={faSquareGithub} className='text-black dark:text-white text-4xl hover:text-slate-600 dark:hover:text-slate-200'/>
            </Link>
        </div>
      {/* <FontAwesomeIcon icon={faFileImport} color='white' fontSize={30}/> */}
    </div>
  )
}

export default FooterComponent
