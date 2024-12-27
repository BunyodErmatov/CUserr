// style
import { useState } from 'react'
import './App.css'

// components
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import NewUserForm from './components/newUser/NewUserForm'
import UserList from './components/userList/UserList'

function App() {
	const [showModal, setShowModal] = useState(false)
	const [users, setUsers] = useState([])

	const deleteUser = id => {
		setUsers(prev => {
			return prev.filter(user => {
				return user.id !== id
			})
		})
	}

	const closeModal = e => {
		if (e.target.className === 'overlay' || e.key === 'Escape') {
			setShowModal(false)
		}
	}

	const addUser = user => {
		setUsers(prev => {
			return [...prev, user]
		})
		setShowModal(false)
	}

	return (
		<div className='App' onClick={closeModal} onKeyDown={closeModal}>
			<Navbar usersLength={users.length} />
			<main>
				<div className='no-users'>
					{users.length === 0 && <h2>No Users</h2>}
				</div>
				<UserList users={users} deleteUser={deleteUser} />
			</main>
			{showModal && <NewUserForm addUser={addUser} />}
			<button className='create-user' onClick={() => setShowModal(true)}>
				Create User
			</button>
			<Footer />
		</div>
	)
}

export default App
