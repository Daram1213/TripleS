import React from 'react'
import PropTypes from 'prop-types'

function ItemFooter({ Links, title }) {
  return (
    <ul>
      <h1 className="mb-3 font-extrabold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name || link.image}>
          <a
            className="text-blue-950 hover:text-blue-600 hover:underline
            text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.image && (
<<<<<<< HEAD
              <img
                src={link.image}
                alt={link.name}
                className="w-12 h-15 border border-solid border-blue-900 rounded-md mt-3"
              />
=======
              <img src={link.image} alt={link.name} className="mr-2 w-8 h-8" />
>>>>>>> 67041ae (Refactor: Footer.jsx 더미데이터 처리)
            )}
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

ItemFooter.propTypes = {
  Links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
}

export default ItemFooter
