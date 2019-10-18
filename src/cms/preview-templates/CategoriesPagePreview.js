import React from 'react'
import PropTypes from 'prop-types'
import { CategoryPostTemplate } from '../../templates/categories-page'

const CategoriesPagePreview = ({ entry, widgetFor }) => (
  <CategoryPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

CategoriesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CategoriesPagePreview
