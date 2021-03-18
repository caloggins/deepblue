import React from 'react'
import * as dependency from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Tanks from './Tanks'

describe('<Tanks />', () => {
    const configure = configureStore()
    const tanks = [
        { id: 1, name: 'red sea' },
        { id: 2, name: 'frags' }
    ]

    beforeEach(() => {
        const store = configure()
        store.dispatch = jest.fn()
    })

    test('snapshot', () => {
        dependency.useSelector = (_) => tanks
        const tree = renderer.create(<Tanks />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('renders a default <div />', () => {
        render(<Tanks />)
        const element = screen.getByText(/display/i)
        expect(element).toBeInTheDocument()
    })

    test('renders the tank size', () => {
        render(<Tanks />)
        const element = screen.getByText(/650/i)
        expect(element).toBeInTheDocument()
    })
})
