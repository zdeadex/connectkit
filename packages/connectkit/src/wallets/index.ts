import { injected } from './connectors/injected';
import { XDEFI } from './connectors/XDEFI';
import { walletConnect } from './connectors/walletConnect';
import { metaMask } from './connectors/metaMask';
import { infinityWallet } from './connectors/infinityWallet';
import { coinbaseWallet } from './connectors/coinbaseWallet';
import { rainbow } from './connectors/rainbow';
import { argent } from './connectors/argent';
import { trust } from './connectors/trust';
import { ledger } from './connectors/ledger';
import { imToken } from './connectors/imToken';
import { brave } from './connectors/brave';
import { steak } from './connectors/steak';
import { unstoppable } from './connectors/unstoppable';
//import { slope } from './connectors/slope';
import { onto } from './connectors/onto';
import { gnosisSafe } from './connectors/gnosisSafe';
import { frontier } from './connectors/frontier';
import { zerion } from './connectors/zerion';
import { family } from './connectors/family';
import { frame } from './connectors/frame';
import { phantom } from './connectors/phantom';
import { dawn } from './connectors/dawn';
import { rabby } from './connectors/rabby';
import { fordefi } from './connectors/fordefi';
import { tokenPocket } from './connectors/tokenPocket';
import { talisman } from './connectors/talisman';


export const getWallets = () => {
  return [
    injected(),
    XDEFI(),
    walletConnect(),
    metaMask(),
    infinityWallet(),
    coinbaseWallet(),
    argent(),
    trust(),
    ledger(),
    family(),
    imToken(),
    unstoppable(),
    onto(),
    steak(),
    frontier(),
    zerion(),
    //slope(),

    // injected
    brave(),
    gnosisSafe(),
    frame(),
    rainbow(),
    phantom(),
    dawn(),
    rabby(),
    fordefi(),
    tokenPocket(),
    talisman(),
  ];
};
