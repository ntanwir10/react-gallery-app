import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
            whileHover={{ opacity: 1 }}
            layout
          >
            <motion.img
              src={doc.url}
              alt="uploaded images"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            ></motion.img>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;