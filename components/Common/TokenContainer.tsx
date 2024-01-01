import React from "react";
import TokenInfo from "./TokenInfo";
import TokenPurchaseForm from "./TokenPurchaseForm";

interface TokenContainerProps {
  onPurchase: (amount: number) => Promise<void>;
  tokenName: string;
  description: string;
  logoUrl: string;
  baseCurrency?: string;
  maxAmount?: number;
  isMainnet?: boolean;
  currentPage: string;
}

const TokenContainer: React.FC<TokenContainerProps> = ({
  onPurchase,
  tokenName,
  description,
  logoUrl,
  baseCurrency,
  maxAmount,
  isMainnet,
  currentPage,
}) => {
  return (
    <div className="token-container">
      <TokenInfo
        tokenName={tokenName}
        description={description}
        logoUrl={logoUrl}
      />
      <TokenPurchaseForm
        onPurchase={onPurchase}
        baseCurrency={baseCurrency}
        maxAmount={maxAmount}
        isMainnet={isMainnet}
        currentPage={currentPage}
      />
    </div>
  );
};

export default TokenContainer;
