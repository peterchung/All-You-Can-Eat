export default function MarqueeText() {
  return (
    <div
      className='h-screen bg-cover bg-center'
      style={{ backgroundImage: 'url("/images/meetups.jpeg")' }}
    >
      <div className='relative flex overflow-x-hidden'>
        <div className='py-12 animate-marquee whitespace-nowrap uppercase'>
          <span className='text-4xl mx-4'>hello</span>
          <span className='text-4xl mx-4'>안녕</span>
          <span className='text-4xl mx-4'>こんにちは</span>
          <span className='text-4xl mx-4'>你好</span>
          <span className='text-4xl mx-4'>Xin chào</span>
          <span className='text-4xl mx-4'>สวัสดีo</span>
          <span className='text-4xl mx-4'>नमस्ते</span>
          <span className='text-4xl mx-4'>hello</span>
          <span className='text-4xl mx-4'>안녕</span>
          <span className='text-4xl mx-4'>こんにちは</span>
          <span className='text-4xl mx-4'>你好</span>
          <span className='text-4xl mx-4'>Xin chào</span>
          <span className='text-4xl mx-4'>สวัสดีo</span>
          <span className='text-4xl mx-4'>नमस्ते</span>
        </div>

        <div className='absolute top-0 py-12 animate-marquee2 whitespace-nowrap uppercase'>
          <span className='text-4xl mx-4'>hello</span>
          <span className='text-4xl mx-4'>안녕</span>
          <span className='text-4xl mx-4'>こんにちは</span>
          <span className='text-4xl mx-4'>你好</span>
          <span className='text-4xl mx-4'>Xin chào</span>
          <span className='text-4xl mx-4'>สวัสดีo</span>
          <span className='text-4xl mx-4'>नमस्ते</span>
          <span className='text-4xl mx-4'>hello</span>
          <span className='text-4xl mx-4'>안녕</span>
          <span className='text-4xl mx-4'>こんにちは</span>
          <span className='text-4xl mx-4'>你好</span>
          <span className='text-4xl mx-4'>Xin chào</span>
          <span className='text-4xl mx-4'>สวัสดีo</span>
          <span className='text-4xl mx-4'>नमस्ते</span>
        </div>
      </div>

      <h2 className='uppercase py-4'>discord meetup dates coming soon</h2>
    </div>
  );
}
