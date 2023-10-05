import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { countryList } from '@/lib/renderingLists';
import OrderDetails from '../orderModal/orderDetails';


export default function Navbar(props) {

    const renderedNavList = props.navbarList.map(item => {
        return <Tab key={item}><li className='p-3 hover:bg-sky-200'>{ item }</li></Tab>
    });

    return (
        <nav className='flex list-none'>
            <Tabs>
                <TabList>
                    { renderedNavList }
                </TabList>

                <TabPanel>
                    <OrderDetails />
                </TabPanel>

                <TabPanel>
                    <p>Do uzupełnienia 2</p>
                    <p>Do uzupełnienia 2</p>
                </TabPanel>
                <TabPanel>
                    <p>Do uzupełnienia 3</p>
                    <p>Do uzupełnienia 3</p>
                    <p>Do uzupełnienia 3</p>
                </TabPanel>
                <TabPanel>
                    <p>Do uzupełnienia 4</p>
                    <p>Do uzupełnienia 4</p>
                    <p>Do uzupełnienia 4</p>
                    <p>Do uzupełnienia 4</p>
                </TabPanel>
                <TabPanel>
                    <p>Do uzupełnienia 5</p>
                    <p>Do uzupełnienia 5</p>
                    <p>Do uzupełnienia 5</p>
                    <p>Do uzupełnienia 5</p>
                    <p>Do uzupełnienia 5</p>
                </TabPanel>
                <TabPanel>
                    <p>Do uzupełnienia 6</p>
                    <p>Do uzupełnienia 6</p>
                    <p>Do uzupełnienia 6</p>
                    <p>Do uzupełnienia 6</p>
                    <p>Do uzupełnienia 6</p>
                    <p>Do uzupełnienia 6</p>
                </TabPanel>
                <TabPanel>
                    <h1>Do uzupełnienia 7</h1>
                    <h1>Do uzupełnienia 7</h1>
                    <h1>Do uzupełnienia 7</h1>
                    <h1>Do uzupełnienia 7</h1>
                    <h1>Do uzupełnienia 7</h1>
                    <h1>Do uzupełnienia 7</h1>
                    <h1>Do uzupełnienia 7</h1>
                </TabPanel>
            </Tabs>
        </nav>
    );
}
