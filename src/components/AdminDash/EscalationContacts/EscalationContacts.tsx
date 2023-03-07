import react, { FC } from 'react';
import GridItem from '../../layout/GridItem/GridItem';
import EscalationContactsTable from '../../global/table/Tables/EscalationContactsTable';


const styles = {
    
}

interface EscalationContactsProps {}

const EscalationContacts: FC<EscalationContactsProps> = () => (
    <GridItem title="Escalation Contacts">
        <EscalationContactsTable />
    </GridItem>
);

export default EscalationContacts;