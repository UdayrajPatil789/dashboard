import React from 'react';
import Card from './card/page';
import styles from '@/app/dashboard/dashboard.module.css'
import Rightbar from './rightbar/page';
import Transactions from './transactions/page';
import Chart from './chart/page';

const DashboardPage = () => {
    return <div className={styles.wrapper}>
        <div className={styles.main}>
        <div className={styles.cards}>
            <Card/>
            <Card/>
            <Card/>    
        </div>
        <Transactions/>
        <Chart/>
        </div>
        <div className={styles.side}>
             <Rightbar/> 
        </div>
    </div>;
}



export default DashboardPage ;