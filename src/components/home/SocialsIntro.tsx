import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";


// import { Card, CardContent } from "@/components/ui/card";
// import { FaFileDownload } from "react-icons/fa";
// FOR FUTURE USE: Uncomment to add a resume download card
/*
            <Card className="p-1 hover:scale-105 cursor-pointer duration-200 ease-in-out rounded-lg">
                <CardContent className="flex items-center justify-center">
                    <div className="flex gap-2 items-center font-semibold">
                        <FaFileDownload size={20}/>
                        <a>Resume</a>
                    </div>
                </CardContent>
            </Card>
 */

export function SocialsIntro() {
    return (
        <div className="flex items-center gap-4">
            <motion.div
                initial={{opacity: 0, x: 200}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.8, ease: "easeOut", delay: 0.6, type: "spring"}}
                className="max-w-sm md:max-w-xl"
            >
                <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/jernsth">
                    <SiGithub size={24}
                              className="hover:scale-115 cursor-pointer duration-200 ease-in-out"
                    />
                </a>
            </motion.div>
            <motion.div
                initial={{opacity: 0, x: 200}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 1, ease: "easeOut", delay: 1, type: "spring"}}
                className="max-w-sm md:max-w-xl"
            >
                <a target="_blank" rel="noopener noreferrer"
                   href="https://www.linkedin.com/in/jonas-hermsen-61b53a142/">
                    <FaLinkedin size={24}
                                className="hover:scale-115 cursor-pointer duration-200 ease-in-out"
                    />
                </a>
            </motion.div>
            <motion.div
                initial={{opacity: 0, x: 200}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 1, ease: "easeOut", delay: 1.2, type: "spring"}}
                className="max-w-sm md:max-w-xl"
            >
                <a href="mailto:jonashermsen@gmx.de">
                    <MdMail size={24}
                            className="hover:scale-115 cursor-pointer duration-200 ease-in-out"
                    />
                </a>
            </motion.div>
        </div>
    );

}