import React from 'react';
import { Testimional,Services } from '../styled';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
export default function Testimionals() {
  return (
   <Testimional>
     <Services>
    <WorkspacePremiumIcon/><h3>Gurantee</h3>
    </Services>
    <Services>
    <LocalShippingIcon/><h3>Free Shipping</h3>
    </Services>
    <Services>
    <SupportAgentIcon/><h3>7/24 Support</h3>
    </Services>
    <Services>
    <CurrencyExchangeIcon/><h3>Money Back</h3>
    </Services>
   </Testimional>
  );
}
