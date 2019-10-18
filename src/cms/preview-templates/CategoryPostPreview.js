import React from 'react'
import PropTypes from 'prop-types'
import { CategoryPostTemplate } from '../../templates/category-post'

const CategoryPostPreview = ({ entry, widgetFor }) => (
  <CategoryPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

CategoryPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CategoryPostPreview
