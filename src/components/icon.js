import {motion} from 'framer-motion'

const Icon = ({icon}) => {
return(
    <motion.div
            whileHover={{ scale: 1.3, cursor: "pointer" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.div>
)
}
export default Icon;