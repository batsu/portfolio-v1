import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab)



export default function StickyHeader() {
    return (
        <header className="sticky">
            <div>
                <a href="mailto:pgchao@gmail.com">
                     <FontAwesomeIcon icon={faEnvelope} size="3x" />
                </a>

                {/* <FontAwesomeIcon icon={faGithub} size="3x" /> */}
                <a href="https://github.com/batsu?tab=repositories">
                    <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
                </a> 
                
            </div>
        </header>
    )
    
}