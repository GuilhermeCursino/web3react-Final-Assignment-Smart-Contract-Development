import { useNFTs ,ThirdwebNftMedia ,useContract ,ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

const contractAddress = "0x7Fa6c676790625878241167Ec064a164499c4A3E"; 
//0x7Fa6c676790625878241167Ec064a164499c4A3E ...thirdwebContract
//0x21C7E8608cfc582AFD6318955F70d8B6Ffb8e38e ...thirdwebContract

export default function Home() {

  const { contract } = useContract(contractAddress);
  //const { mutateAsync: mintNft, isLoading, error } = useMintNFT(contract);
  const { data: nfts, isLoading: isReadingNfts } = useNFTs(contract);
  

  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
            Welcome to {""}
            <span className="gradient-text-0">
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                thirdweb.
              </a>
            </span>
          </h1>

          <p className="title gradient-text-1 ">
            ...Final assignmet!                    
          </p>
         
          <div className="connect">        
     
          </div>

          <div className="connect">
            <ConnectWallet
                dropdownPosition={{
                  side: "bottom",
                  align: "center",
                  }}
                />
          </div>

          <div className="grid"> 
          <div className="connect">
          <iframe
              src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/marketplace-v3.html?contract=0xBFCC38451d37658F16a85A3D7f48E58a72d4836b&chain=%7B%22name%22%3A%22Mumbai%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fmumbai.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22maticmum%22%2C%22chainId%22%3A80001%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22mumbai%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=083267c3d891faaca856196abb97e28b&directListingId=2&theme=dark&primaryColor=purple"
              width="300px"
              height="600px"
              //style="max-width:100%;"
              frameborder="0"
          ></iframe>
          </div>

          <div className="connect">
          <iframe
              src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/marketplace-v3.html?contract=0xBFCC38451d37658F16a85A3D7f48E58a72d4836b&chain=%7B%22name%22%3A%22Mumbai%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fmumbai.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22maticmum%22%2C%22chainId%22%3A80001%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22mumbai%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=083267c3d891faaca856196abb97e28b&directListingId=3&theme=dark&primaryColor=purple"
              width="300px"
              height="600px"
              //style="max-width:100%;"
              frameborder="0"
          ></iframe>
          </div>

          <div className="connect">
          <iframe
              src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/marketplace-v3.html?contract=0xBFCC38451d37658F16a85A3D7f48E58a72d4836b&chain=%7B%22name%22%3A%22Mumbai%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fmumbai.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22maticmum%22%2C%22chainId%22%3A80001%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22mumbai%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=083267c3d891faaca856196abb97e28b&directListingId=4&theme=dark&primaryColor=purple"
              width="300px"
              height="600px"
              //style="max-width:100%;"
              frameborder="0"
          ></iframe>
          </div>

          <div className="connect">
          <iframe
              src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/marketplace-v3.html?contract=0xBFCC38451d37658F16a85A3D7f48E58a72d4836b&chain=%7B%22name%22%3A%22Mumbai%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fmumbai.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22maticmum%22%2C%22chainId%22%3A80001%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22mumbai%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=083267c3d891faaca856196abb97e28b&directListingId=5&theme=dark&primaryColor=purple"
              width="300px"
              height="600px"
              //style="max-width:100%;"
              frameborder="0"
          ></iframe>
          </div>

        </div>
        <div className="grid"> 
        </div>


          <div>
            <h2>My NFTs</h2>
            {isReadingNfts ? (
              <p>Loading...</p>
            ) : (
              <div>
                {nfts.map((nft) => (
                  <>
                    <ThirdwebNftMedia
                      key={nft.tokenId}
                      metadata={nft.metadata}
                      height={500}
                      width={500}
                      style={{ backgroundColor: "blue" }}
                      
                    />
                    <h3>{nft.metadata.name}</h3>
                  </>
                ))}

                
              </div>
            )}       
          </div>
 
        </div>
      </div>
      
    </main>
  );
}
