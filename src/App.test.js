import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from './App'

test('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON()

    expect(tree).toMatchSnapshot()
})

xtest('renders learn react link', () => {
    render(<App />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})
