import test from 'ava'
import auth from '../../app/auth'

import {hashSync} from 'bcryptjs'
import genSalt from '../../app/auth/salt'

test('returns true on correct login', t => {
  const salt = genSalt('abc')
  const hash = hashSync('password', salt)

  return auth.login('abc', hash)
    .then(response => {
      t.true(response)
    })
})

test('returns error on wrong password', t => {
  return t.throws(auth.login('abc', 'wrong'), 'Wrong password')
})

test('returns error on inexistent user', t => {
  return t.throws(auth.login('banana', 'wrong'), 'User doesn\'t exist')
})

test('stays logged in until log out', t => {
  const salt = genSalt('abc')
  const hash = hashSync('password', salt)

  return auth.login('abc', hash)
    .then(() => {
      t.true(auth.loggedIn())
      auth.logout(() => {
        t.false(auth.loggedIn())
      })
    })
})
