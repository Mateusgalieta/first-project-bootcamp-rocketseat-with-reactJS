import React from 'react';
import { FiChevronRight } from "react-icons/fi";

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer"/>
            <Title>Explore repositórios no Github</Title>

            <Form action="">
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img src="https://avatars2.githubusercontent.com/u/23356788?s=460&u=e72f688a5aae25927470c3313d97617cd8324b81&v=4" alt="Mateus Galieta"/>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img src="https://avatars2.githubusercontent.com/u/23356788?s=460&u=e72f688a5aae25927470c3313d97617cd8324b81&v=4" alt="Mateus Galieta"/>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img src="https://avatars2.githubusercontent.com/u/23356788?s=460&u=e72f688a5aae25927470c3313d97617cd8324b81&v=4" alt="Mateus Galieta"/>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
