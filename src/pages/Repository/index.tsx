import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { Header, RepositoryInfo, Issues } from './styles'
import logoImg from '../../assets/logo.svg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface RepositoryParams {
	repository: string
}

const Repository: React.FC = () => {
	const { params } = useRouteMatch<RepositoryParams>()

	return (
		<>
			<Header>
				<img src={logoImg} />
				<Link to={'/'}>
					<FiChevronLeft />
					Voltar
				</Link>
			</Header>
			<RepositoryInfo>
				<header>
					<img
						src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
						alt="Avatar"
					/>
					<div>
						<strong>rocketseat/unform</strong>
						<p>descricao do repositorio</p>
					</div>
				</header>
				<ul>
					<li>
						<strong>1808</strong>
						<span>Stars</span>
					</li>
					<li>
						<strong>48</strong>
						<span>Forks</span>
					</li>
					<li>
						<strong>67</strong>
						<span>Issues abertas</span>
					</li>
				</ul>
			</RepositoryInfo>
			<Issues>
				<Link to="asdasd">
					<div>
						<strong>adasdsd</strong>
						<p>adasds</p>
					</div>
					<FiChevronRight size={20} />
				</Link>
			</Issues>
		</>
	)
}

export default Repository
